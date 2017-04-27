---
title: "Emacs endemoniado"
date: "2017-04-26T22:07:03.284Z"
layout: post
path: "/emacs/demonios/"
category: "acelerar emacs"
description: "Un truquito para iniciar a trabar en Emacs sin tener que esperar a cargar las personalizaciones."
---

En algún momento, todos empezamos a agregar características a Emacs, que nos parecen fundamentales para realizar nuestro trabajo. Esto hace que el inicio de Emacs pueda demorar un poquito más. Para evitar este retraso se puede utilizar emacs como demonio o servidor. Esto hace que nuestras preferencias carguen al iniciar el servicio sin importar que todavía no hayamos abierto nuestro editor.

El código que dejo en este post es una modificación de la [wiki de Arch](https://wiki.archlinux.org/index.php/emacs#As_a_systemd_unit). Este nos permite crear tantos demonios como consideremos necesarios.

#### ~/.config/systemd/user/emacs@.service ####
~~~~
[Unit]
Description=Emacs: the extensible, self-documenting text editor
After=ssh-agent.service

[Service]
Type=forking
ExecStart=/usr/bin/emacs --daemon=%i
ExecStop=/usr/bin/emacsclient -s /tmp/emacs1000/%i --eval "(kill-emacs)"
Environment=SSH_AUTH_SOCK=%t/keyring/ssh
Restart=always

[Install]
WantedBy=default.target
~~~~

Agregando este archivo, tenemos la posibilidad de crear un demonio con el siguiente comando:

`systemctl --user start emacs@principal`

En este caso en particular el nombre de nuestro demonio sera principal.
Esa linea solo iniciara el servicio, si te resulta práctico, podes habilitar el servicio para que inicie con el usuario:

`systemctl --user enable emacs@principal`

Y luego para conectarte al cliente no hace falta más que ejecutar desde la linea de comandos:

`emacsclient -s /tmp/emacs$(id -u)/principal -t`

O bien:

`emacsclient -s /tmp/emacs$(id -u)/principal -c`

Si queremos que Emacs inicie en una ventana gráfica.

Si sos de preferir la ventana y abrirlo desde el icono, podes escribir el siguiente contenido en ~/.local/share/applications/emacs.desktop

~~~~
[Desktop Entry]
Name=Emacs
GenericName=Text Editor
Comment=Edit text
MimeType=text/english;text/plain;text/x-makefile;text/x-c++hdr;text/x-c++src;text/x-chdr;text/x-csrc;text/x-java;text/x-moc;text/x-pascal;text/x-tcl;text/x-tex;application/x-shellscript;text/x-c;text/x-c++;
Exec=emacsclient -s /tmp/emacsESCRÍBIME/main -c %F
Icon=emacs
Type=Application
Terminal=false
Categories=Development;TextEditor;
StartupWMClass=Emacs
Keywords=Text;Editor;
~~~~

Sólo deberás reemplazar la palabra ESCRÍBEME con tu id de sesión.
