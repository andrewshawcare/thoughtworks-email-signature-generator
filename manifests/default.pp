exec {'apt-get update':
    path => '/usr/bin'
}

class {'nodejs':
    require => Exec['apt-get update'],
    manage_repo => true
}

package {'git':
    ensure => installed
}

package {'bower':
    require => Class['nodejs'],
    ensure => installed,
    provider => 'npm'
}

package {'grunt-cli':
    require => Class['nodejs'],
    ensure => installed,
    provider => 'npm'
}