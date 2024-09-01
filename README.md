### Create files so vite can run https (Mac only)
You'll need to replace the specific pfx file with the one on your system
```bash
openssl pkcs12 -in ~/.aspnet/dev-certs/https/aspnetcore-localhost-292C1A6FF960A5A185EAFF1B72F3729E652B331D.pfx -out ~/.aspnet/https/localhost.pem -nokeys -nodes
openssl pkcs12 -in ~/.aspnet/dev-certs/https/aspnetcore-localhost-292C1A6FF960A5A185EAFF1B72F3729E652B331D.pfx -out ~/.aspnet/https/localhost.key -nocerts -nodes
chmod 600 ~/.aspnet/https/localhost.pem
chmod 600 ~/.aspnet/https/localhost.key
```

### Link Component Lib
From `web.client.components/`
```bash
npm link
```

### Link App to Component Lib
From `web.client/`
```bash
npm link web.client.components
```

### Lefthook
This tools allows us to use git hooks to run tasks

Windows:
https://github.com/evilmartians/lefthook/blob/master/docs/install.md#winget

From the repo root setup lefthook
```bash
lefthook install
```

