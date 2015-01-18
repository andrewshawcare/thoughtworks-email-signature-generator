VAGRANTFILE_API_VERSION = '2'

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
    # Ubuntu 12.04.5 LTS (Precise Pangolin) 64-bit PC (AMD64)
    config.vm.box = 'precise64'
    config.vm.box_url = 'http://files.vagrantup.com/precise64.box'
    
    # Express web server
    config.vm.network :forwarded_port, guest: 5000, host: 5000
    # Live Reload
    config.vm.network :forwarded_port, guest: 35729, host: 35729
    
    config.vm.provision :puppet do |puppet|
        puppet.manifest_file = 'install_puppet_modules.pp'
    end
    config.vm.provision :puppet
end