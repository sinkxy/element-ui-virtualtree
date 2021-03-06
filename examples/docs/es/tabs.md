<script>
  export default {
    data() {
      return {
        activeName: 'second',
        activeName2: 'first',
        editableTabsValue: '2',
        editableTabsValue2: '2',
        editableTabs: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        editableTabs2: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        tabIndex: 2,
        tabPosition: 'top'
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleTabsEdit(targetName, action) {
        if (action === 'add') {
          let newTabName = ++this.tabIndex + '';
          this.editableTabs.push({
            title: 'New Tab',
            name: newTabName,
            content: 'New Tab content'
          });
          this.editableTabsValue = newTabName;
        }
        if (action === 'remove') {
          let tabs = this.editableTabs;
          let activeName = this.editableTabsValue;
          if (activeName === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1];
                if (nextTab) {
                  activeName = nextTab.name;
                }
              }
            });
          }
          
          this.editableTabsValue = activeName;
          this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        }
      },
      addTab(targetName) {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs2.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        });
        this.editableTabsValue2 = newTabName;
      },
      removeTab(targetName) {
        let tabs = this.editableTabs2;
        let activeName = this.editableTabsValue2;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        
        this.editableTabsValue2 = activeName;
        this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
      }
    }
  }
</script>

## Tabulaci??n

Divide colecciones de datos que est??n relacionados pero pertenecen a diferentes tipos.

### Uso b??sico

Tabulaci??n b??sica y concisa

:::demo Tabulaci??n provee funcionalidad de tarjeta selectiva. Por defecto, la primer pesta??a es seleccionada como activa, y es posible activar cualquier pesta??a estableciendo el atributo de `value`.

```html
<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="User" name="first">User</el-tab-pane>
    <el-tab-pane label="Config" name="second">Config</el-tab-pane>
    <el-tab-pane label="Role" name="third">Role</el-tab-pane>
    <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
```
:::

### Estilo de Tarjeta

Pesta??as dise??adas como tarjetas.

:::demo Establecer `type` a `card` para obtener una pesta??a dise??ada como tarjeta.

```html
<template>
  <el-tabs type="card" @tab-click="handleClick">
    <el-tab-pane label="User">User</el-tab-pane>
    <el-tab-pane label="Config">Config</el-tab-pane>
    <el-tab-pane label="Role">Role</el-tab-pane>
    <el-tab-pane label="Task">Task</el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
```
:::

### Tarjeta con Bordes

Pesta??as de tarjeta con bordes.

:::demo Establecer `type` a `border-card`.

```html
<el-tabs type="border-card">
  <el-tab-pane label="User">User</el-tab-pane>
  <el-tab-pane label="Config">Config</el-tab-pane>
  <el-tab-pane label="Role">Role</el-tab-pane>
  <el-tab-pane label="Task">Task</el-tab-pane>
</el-tabs>
```

:::

### Posici??n de tabulaci??n

Es posible usar el atributo `tab-position` para establecer la posici??n de la tabulaci??n.

:::demo Es posible escoger entre cuatro direcciones: `tabPosition="left|right|top|bottom"`

```html
<template>
  <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
    <el-radio-button label="top">top</el-radio-button>
    <el-radio-button label="right">right</el-radio-button>
    <el-radio-button label="bottom">bottom</el-radio-button>
    <el-radio-button label="left">left</el-radio-button>
  </el-radio-group>

  <el-tabs :tab-position="tabPosition" style="height: 200px;">
    <el-tab-pane label="User">User</el-tab-pane>
    <el-tab-pane label="Config">Config</el-tab-pane>
    <el-tab-pane label="Role">Role</el-tab-pane>
    <el-tab-pane label="Task">Task</el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    data() {
      return {
        tabPosition: 'top'
      };
    }
  };
</script>
```
:::

### Pesta??a Personalizada

Es posible usar slots con nombre para personalizar el contenido de la etiqueta de la pesta??a.

:::demo
```html
<el-tabs type="border-card">
  <el-tab-pane>
    <span slot="label"><i class="el-icon-date"></i> Route</span>
    Route
  </el-tab-pane>
  <el-tab-pane label="Config">Config</el-tab-pane>
  <el-tab-pane label="Role">Role</el-tab-pane>
  <el-tab-pane label="Task">Task</el-tab-pane>
</el-tabs>
```
:::

### Agregar y cerrar pesta??a

Solo las pesta??as de tipo tarjeta soportan adici??n y cierre.

:::demo
```html
<el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
  <el-tab-pane
    v-for="(item, index) in editableTabs"
    :key="item.name"
    :label="item.title"
    :name="item.name"
  >
    {{item.content}}
  </el-tab-pane>
</el-tabs>
<script>
  export default {
    data() {
      return {
        editableTabsValue: '2',
        editableTabs: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        tabIndex: 2
      }
    },
    methods: {
      handleTabsEdit(targetName, action) {
        if (action === 'add') {
          let newTabName = ++this.tabIndex + '';
          this.editableTabs.push({
            title: 'New Tab',
            name: newTabName,
            content: 'New Tab content'
          });
          this.editableTabsValue = newTabName;
        }
        if (action === 'remove') {
          let tabs = this.editableTabs;
          let activeName = this.editableTabsValue;
          if (activeName === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1];
                if (nextTab) {
                  activeName = nextTab.name;
                }
              }
            });
          }
          
          this.editableTabsValue = activeName;
          this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        }
      }
    }
  }
</script>
```
:::

### Bot??n disparador personalizado de la nueva pesta??a

:::demo
```html
<div style="margin-bottom: 20px;">
  <el-button
    size="small"
    @click="addTab(editableTabsValue2)"
  >
    add tab
  </el-button>
</div>
<el-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab">
  <el-tab-pane
    v-for="(item, index) in editableTabs2"
    :key="item.name"
    :label="item.title"
    :name="item.name"
  >
    {{item.content}}
  </el-tab-pane>
</el-tabs>
<script>
  export default {
    data() {
      return {
        editableTabsValue2: '2',
        editableTabs2: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        tabIndex: 2
      }
    },
    methods: {
      addTab(targetName) {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs2.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        });
        this.editableTabsValue2 = newTabName;
      },
      removeTab(targetName) {
        let tabs = this.editableTabs2;
        let activeName = this.editableTabsValue2;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        
        this.editableTabsValue2 = activeName;
        this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
      }
    }
  }
</script>
```
:::

### Atributos de Pesta??as
| Atributo     | Descripci??n                          | Tipo    | Valores aceptados     | Por defecto                 |
| ------------ | ------------------------------------ | ------- | --------------------- | --------------------------- |
| type         | tipo de Pesta??a                      | string  | card/border-card      | ???                           |
| closable     | si la Pesta??a es cerrable            | boolean | ???                     | false                       |
| addable      | si la Pesta??a es a??adible            | boolean | ???                     | false                       |
| editable     | si la Pesta??a es a??adible y cerrable | boolean | ???                     | false                       |
| value        | nombre de la pesta??a seleccionada    | string  | ???                     | nombre de la primer pesta??a |
| tab-position | posici??n de tabulaci??n               | string  | top/right/bottom/left | top                         |
| stretch      | si el ancho del tab se ajusta autom??ticamente a su contenedor | boolean | - | false |
| before-leave | funci??n `hook` antes de cambiar de pesta??a. Si se devuelve `false` o se devuelve una `Promise` y luego se rechaza, se evitar?? el cambio. | Function(activeName, oldActiveName) | ??? | ??? |

### Eventos de Pesta??as
| Nombre de Evento | Descripci??n                              | Par??metros                    |
| ---------------- | ---------------------------------------- | ----------------------------- |
| tab-click        | se lanza cuando se hace click a una pesta??a | pesta??a clickeada             |
| tab-remove       | se lanza cuando se hace click al bot??n tab-remove | nombre de la pesta??a removida |
| tab-add          | se lanza cuando se hace click al bot??n tab-add | ???                             |
| edit             | se lanza cuando los botones de tab-add y/o tab-remove son clickeados | (targetName, action)          |

### Attributos del Tab-pane
| Atributo | Descripci??n                                                  | Tipo    | Valores Aceptados | Default                                                      |
| -------- | ------------------------------------------------------------ | ------- | ----------------- | ------------------------------------------------------------ |
| label    | t??tulo de la pesta??a                                         | string  | ???                 | ???                                                            |
| disabled | si la Tabulaci??n est?? deshabilitada                          | boolean | ???                 | false                                                        |
| name     | identificador correspondiente al activeName de la Tabulaci??n, representando el alias del tab-pane | string  | ???                 | n??mero ordinal del tab-pane en la secuencia, p.ej el primer tab-pane de pesta??as es '1' |
| closable | si el Tab es cerrable                                        | boolean | ???                 | false                                                        |
| lazy     | si Tab es renderizado con `lazy-load`                        | boolean | ???                 | false                                                        |
