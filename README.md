### Create files so vite can run https

openssl pkcs12 -in ~/.aspnet/dev-certs/https/aspnetcore-localhost-292C1A6FF960A5A185EAFF1B72F3729E652B331D.pfx -out ~/.aspnet/https/localhost.pem -nokeys -nodes
openssl pkcs12 -in ~/.aspnet/dev-certs/https/aspnetcore-localhost-292C1A6FF960A5A185EAFF1B72F3729E652B331D.pfx -out ~/.aspnet/https/localhost.key -nocerts -nodes
chmod 600 ~/.aspnet/https/localhost.pem
chmod 600 ~/.aspnet/https/localhost.key
