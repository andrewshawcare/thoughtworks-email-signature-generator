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

package {'ruby1.9.3':
    require => Exec['apt-get update'],
    ensure => installed
}

package {'foreman':
    require => Package['ruby1.9.3'],
    ensure => installed,
    provider => 'gem'
}