# Moving Docker Location
https://forums.docker.com/t/how-could-i-install-docker-for-windows-on-drive-e-my-ssd-c-is-full/52347/5

```powershell
sc stop docker
```

```txt
dockerd --unregister-service
```

The specified service does not exist as an installed service.

