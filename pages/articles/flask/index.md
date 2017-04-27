---
title: "Flask y ReactJS"
date: "2017-03-29T22:12:03.284Z"
layout: post
path: "/flask/problema-y-objetivo"
category: "web development"
description: "Después de realizar una larga búsqueda por github, tratando de encontrar un proyecto que coincidiera con lo que tengo en mente, decidí escribir una serie de artículos sobre como crear un proyecto utilizando flask y reactjs. Sin dejar de lado los test y la metodología de trabajo."
---

La combinación de estas herramientas es bastante sencilla, pero si además queremos agregar extensiones para facilitar la autenticación, hacer test de api con pytest, testear el frontend y generar una imagen de docker para facilitar la instalación y configuración se incrementa la complejidad.

Estuve buscando bastante en Github, tratando de encontrar un proyecto que cubra estas tecnologías, existen diferentes alternativas que voy a usar como referencia, pero dado de que es un caso particular de composición de software voy a generar un nuevo proyecto.

El objetivo es tener un proyecto para clonar, que permita comenzar rápido con la escritura de casos de prueba y el desarrollo de la aplicación.

Los recursos que voy a utilizar son:

- Flask
- Flask-SQLAlchemy
- Flask-Security-Fork (esperando que se pueda realizar la fusión con Flask-Security)
- Pytest
- node (npm)
- Webpack
- React
- Semantic-UI-React
