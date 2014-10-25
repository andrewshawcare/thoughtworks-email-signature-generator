Exec {
    path => [
        '/bin',
        '/usr/bin',
        '/opt/vagrant_ruby/bin'
    ]
}

file {'puppet module directory':
    path => '/etc/puppet/modules',
    ensure => directory
}

exec {'puppet module install puppetlabs/nodejs':
    require => File['puppet module directory'],
    creates => '/etc/puppet/modules/nodejs'
}