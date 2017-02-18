---
title: "Systemd y Docker, dos buenos aliados"
date: "2017-02-17T22:12:03.284Z" UPDATE
layout: post
path: "/systemd-docker-aliados/"
category: "energy saving"
description: "Systemd es una gran herramienta para administrar el sistema, y docker es fantástico para proveer servicios, además ambos en conjunto, pueden generar un ahorro de energía."
---

Hace algunos años quede deslumbrado con la systemd y su forma de administrar el sistema a través de la utilización de sockets. También me pareció fantástico el concepto de que un servicio, inicie cuando es requerido, systemd ofrece esta capacidad utilizando las unidades de tipo [socket](https://www.freedesktop.org/software/systemd/man/systemd.socket.html).
El problema era que en ese entonces, casi ningún servicio tenia la capacidad de recibir un socket como parámetro, y además, resultaba casi imposible pensar que todos los servicios modificarían su forma de funcionar para cooperar con systemd.
A forma de solucionar este problema systemd incorporo la opción [systemd-socket-proxyd](https://www.freedesktop.org/software/systemd/man/systemd-socket-proxyd.html), su función es redirigir el trafico del puerto en escucha por systemd al servicio, y consecuentemente iniciar el servicio para procesar la solicitud.

Si esta parte te resulto interesante, te invito a que leas un poco el post [On-demand activation of Docker containers with systemd](https://developer.atlassian.com/blog/2015/03/docker-systemd-socket-activation/) de [Steve Smith](https://developer.atlassian.com/blog/authors/ssmith/).

La idea de este post, es aplicar este concepto para generar un ahorro de energía. O bien, destinar esa energía a la realización de otra tarea que la requiera. Se me ocurre que durante la noche, muchos servicios no reciben solicitudes, aún así, puede estar ocupando memoria o bien compitiendo en el scheduling de procesos. Esto genera un consumo extra de energía que trataré de probar en un próximo post.
