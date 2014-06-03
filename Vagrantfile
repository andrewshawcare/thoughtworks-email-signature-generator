VAGRANTFILE_API_VERSION = '2'

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
    config.vm.box = 'precise64'
    config.vm.box_url = 'http://files.vagrantup.com/precise64.box'
    config.vm.network :forwarded_port, guest: 8000, host: 8000
    config.vm.network :forwarded_port, guest: 35729, host: 35729
    config.vm.provision :puppet do |puppet|
        puppet.manifest_file = 'install_puppet_modules.pp'
    end
    config.vm.provision :puppet
end