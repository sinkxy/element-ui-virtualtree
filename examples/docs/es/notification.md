<script>
  module.exports = {
    methods: {
      open() {
        const h = this.$createElement;
    
        this.$notify({
          title: 'Title',
          message: h('i', { style: 'color: teal' }, 'This is a reminder')
        });
      },
    
      open2() {
        this.$notify({
          title: 'Prompt',
          message: 'This is a message that does not automatically close',
          duration: 0
        });
      },
    
      open3() {
        this.$notify({
          title: 'Success',
          message: 'This is a success message',
          type: 'success'
        });
      },
    
      open4() {
        this.$notify({
          title: 'Warning',
          message: 'This is a warning message',
          type: 'warning'
        });
      },
    
      open5() {
        this.$notify.info({
          title: 'Info',
          message: 'This is an info message'
        });
      },
    
      open6() {
        this.$notify.error({
          title: 'Error',
          message: 'This is an error message'
        });
      },
    
      open7() {
        this.$notify({
          title: 'Custom Position',
          message: 'I\'m at the top right corner'
        });
      },
    
      open8() {
        this.$notify({
          title: 'Custom Position',
          message: 'I\'m at the bottom right corner',
          position: 'bottom-right'
        });
      },
    
      open9() {
        this.$notify({
          title: 'Custom Position',
          message: 'I\'m at the bottom left corner',
          position: 'bottom-left'
        });
      },
    
      open10() {
        this.$notify({
          title: 'Custom Position',
          message: 'I\'m at the top left corner',
          position: 'top-left'
        });
      },
    
      open11() {
        this.$notify.success({
          title: 'Success',
          message: 'This is a success message',
          offset: 100
        });
      },
    
      open12() {
        this.$notify({
          title: 'HTML String',
          dangerouslyUseHTMLString: true,
          message: '<strong>This is <i>HTML</i> string</strong>'
        });
      },
      
      open13() {
        this.$notify.success({
          title: 'Info',
          message: 'This is a message without close button',
          showClose: false
        });
      },
    
      onClose() {
        console.log('Notification is closed');
      }
    }
  };
</script>

## Notification

Muestra un mensaje de notificaci??n global en una esquina de la p??gina.

### Uso b??sico

:::demo Element ha registrado el m??todo`$notify` y recibe un objeto como par??metro. En el caso m??s sencillo, puede establecer el campo de `title` y el campo de ` message` para el t??tulo y el cuerpo de la notificaci??n. De forma predeterminada, la notificaci??n se cierra autom??ticamente despu??s de 4500ms, pero configurando `duration`  se puede controlar su duraci??n. Espec??ficamente, si est?? configurado en `0`, no se cerrar?? autom??ticamente. Tenga en cuenta que `duration` recibe un `Number` en milisegundos.

```html
<template>
  <el-button
    plain
    @click="open">
    Closes automatically
  </el-button>
  <el-button
    plain
    @click="open2">
    Won't close automatically
    </el-button>
</template>

<script>
  export default {
    methods: {
      open() {
        const h = this.$createElement;

        this.$notify({
          title: 'Title',
          message: h('i', { style: 'color: teal' }, 'This is a reminder')
        });
      },

      open2() {
        this.$notify({
          title: 'Prompt',
          message: 'This is a message that does not automatically close',
          duration: 0
        });
      }
    }
  }
</script>
```
:::

### Tipos de notificaciones

Proporcionamos cuatro tipos: success, warning, info y error.

:::demo Element proporciona cuatro tipos de notificaci??n: `success`, `warning`, `info` y `error`. Se definen por el campo `type`  y se ignorar??n otros valores. Tambi??n se han registrado m??todos para estos tipos que se pueden invocar directamente como en el ejemplo `open5` y `open6` sin pasar un campo `type`.

```html
<template>
  <el-button
    plain
    @click="open3">
    Success
  </el-button>
  <el-button
    plain
    @click="open4">
    Warning
  </el-button>
  <el-button
    plain
    @click="open5">
    Info
  </el-button>
  <el-button
    plain
    @click="open6">
    Error
  </el-button>
</template>

<script>
  export default {
    methods: {
      open3() {
        this.$notify({
          title: 'Success',
          message: 'This is a success message',
          type: 'success'
        });
      },

      open4() {
        this.$notify({
          title: 'Warning',
          message: 'This is a warning message',
          type: 'warning'
        });
      },

      open5() {
        this.$notify.info({
          title: 'Info',
          message: 'This is an info message'
        });
      },

      open6() {
        this.$notify.error({
          title: 'Error',
          message: 'This is an error message'
        });
      }
    }
  }
</script>
```
:::

### Posicion personalizada

La notificaci??n puede surgir de cualquier rinc??n que uno desee.

:::demo El atributo `position` define desde qu?? esquina se desliza la notificaci??n. Puede ser `top-right`, `top-left`, `bottom-right` o `bottom-left`. Predeterminado: `top-right`.

```html
<template>
  <el-button
    plain
    @click="open7">
    Top Right
  </el-button>
  <el-button
    plain
    @click="open8">
    Bottom Right
  </el-button>
  <el-button
    plain
    @click="open9">
    Bottom Left
  </el-button>
  <el-button
    plain
    @click="open10">
    Top Left
  </el-button>
</template>

<script>
  export default {
    methods: {
      open7() {
        this.$notify({
          title: 'Custom Position',
          message: 'I\'m at the top right corner'
        });
      },

      open8() {
        this.$notify({
          title: 'Custom Position',
          message: 'I\'m at the bottom right corner',
          position: 'bottom-right'
        });
      },

      open9() {
        this.$notify({
          title: 'Custom Position',
          message: 'I\'m at the bottom left corner',
          position: 'bottom-left'
        });
      },

      open10() {
        this.$notify({
          title: 'Custom Position',
          message: 'I\'m at the top left corner',
          position: 'top-left'
        });
      }
    }
  }
</script>
```
:::

### Desplazamiento

Personalizar el desplazamiento de notificaci??n desde el borde de la pantalla.

:::demo Configure el atributo `offset` para personalizar el desplazamiento de la notificaci??n desde el borde de la pantalla. Tenga en cuenta que cada instancia de la notificaci??n del mismo momento debe tener el mismo desplazamiento.

```html
<template>
  <el-button
    plain
    @click="open11">
    Notification with offset
  </el-button>
</template>

<script>
  export default {
    methods: {
      open11() {
        this.$notify.success({
          title: 'Success',
          message: 'This is a success message',
          offset: 100
        });
      }
    }
  }
</script>
```
:::

### Usando cadenas HTML
`message` soporta cadenas HTML.

:::demo Configure `dangerouslyUseHTMLString` a true y `message` se tratar?? como una cadena HTML.

```html
<template>
  <el-button
    plain
    @click="open12">
    Use HTML String
  </el-button>
</template>

<script>
  export default {
    methods: {
      open12() {
        this.$notify({
          title: 'HTML String',
          dangerouslyUseHTMLString: true,
          message: '<strong>This is <i>HTML</i> string</strong>'
        });
      }
    }
  }
</script>
```
:::

:::warning

Aunque la propiedad `message` soporta cadenas HTML, el renderizado din??mico de HTML arbitrario en su sitio web puede ser muy peligroso porque puede conducir f??cilmente a [ataques XSS](https://en.wikipedia.org/wiki/Cross-site_scripting). Por lo tanto, cuando `dangerouslyUseHTMLString` est?? a true, por favor aseg??rese de que el contenido del mensaje es confiable, y **nunca** asigne `message` al contenido proporcionado por el usuario.

:::

### Ocultar boton de cerrar

Es posible ocultar el bot??n de cerrar

:::demo Configure el atributo `showClose` como `false` para que el usuario no pueda cerrar la notificaci??n.

```html
<template>
  <el-button
    plain
    @click="open13">
    Hide close button
    </el-button>
</template>

<script>
  export default {
    methods: {
      open13() {
        this.$notify.success({
          title: 'Info',
          message: 'This is a message without close button',
          showClose: false
        });
      }
    }
  }
</script>
```
:::

### Metodo global

Element ha a??adido un m??todo global `$notify` para Vue.prototype. As?? que en una instancia de vue se puede llamar `Notification` como lo hacemos en esta p??gina.

### Importar localmente

Importar `Notification`:

```javascript
import { Notification } from 'element-ui';
```

En este caso, debe llamar a `Notification(options)`. Tambi??n se han registrado m??todos para diferentes tipos, e.j. `Notification.success(options)`. Puede llamar al metodo `Notification.closeAll()` para cerrar manualmente todas las instancias.

### Opciones
| Atributo                 | Descripci??n                              | Tipo             | Valores aceptados                        | Por defecto |
| ------------------------ | ---------------------------------------- | ---------------- | ---------------------------------------- | ----------- |
| title                    | titulo                                   | string           | ???                                        | ???           |
| message                  | mensaje                                  | string/Vue.VNode | ???                                        | ???           |
| dangerouslyUseHTMLString | si  `message` es tratado como una cadena HTML | boolean          | ???                                        | false       |
| type                     | tipo de notificacion                     | string           | success/warning/info/error               | ???           |
| iconClass                | clase personalizada de icono. Ser?? anulado por `type` | string           | ???                                        | ???           |
| customClass              | nombre de clase personalizado para la notificacion | string           | ???                                        | ???           |
| duration                 | duracion antes de cerrar. Si no se quiere que se cierre automaticamente este valor debe estar a 0 | number           | ???                                        | 4500        |
| position                 | posicion personalizada                   | string           | top-right/top-left/bottom-right/bottom-left | top-right   |
| showClose                | si se muestra el boton de cerrar         | boolean          | ???                                        | true        |
| onClose                  | funcion que se ejecuta cuando la notificaci??n se cierra | function         | ???                                        | ???           |
| onClick                  | funcion que se ejecuta cuando se hace click en la notificaci??n | function         | ???                                        | ???           |
| offset                   | desplazamiento desde el borde superior de la pantalla. Cada instancia de notificaci??n del mismo momento debe tener siempre el mismo desplazamiento. | number           | ???                                        | 0           |

### Metodos
`Notification` y `this.$notify` devuelven la instancia de la notificacion actual. Para cerrar manualmente la instancia, se puede llamar `close` para ello.

| Metodo | Descripci??n            |
| ------ | ---------------------- |
| close  | cierra la notificaci??n |
