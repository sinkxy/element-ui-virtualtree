<style>
  .upload-tip {
    color: #8492a6;
    font-size: 12px;
    margin-top: 7px;
  }
  .demo-box {
    margin-bottom: 24px;

    .upload-demo {
      width: 360px;
    }
    .avatar-uploader {
      .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    
        &:hover, &:focus {
          border-color: #409EFF;
        }
      }
      .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: @width;
        line-height: @height;
        text-align: center;
      }
      .avatar {
        width: 178px;
        height: @width;
        display: block;
      }
    }
  }
</style>

<script>
  export default {
    data() {
      return {
        fileList: [{
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }, {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }],
        fileList2: [{
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }, {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }],
        fileList3: [{
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }, {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }],
        imageUrl: '',
        dialogImageUrl: '',
        dialogVisible: false
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      beforeUpload(file) {
        if (file.size > 40000000) {
          console.warn(file.name + ' is too large!');
          return false;
        }
        return true;
      },
      handlePreview(file) {
        console.log(file);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      submitUpload() {
        this.$refs.upload.submit();
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;
    
        if (!isJPG) {
          this.$message.error('Avatar picture must be JPG format!');
        }
        if (!isLt2M) {
          this.$message.error('Avatar picture size can not exceed 2MB!');
        }
        return isJPG && isLt2M;
      },
      handleChange(file, fileList) {
        this.fileList3 = fileList.slice(-3);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`You can upload up to 3 files. You selected ${files.length} files this time, and ${files.length + fileList.length} files totally`);
      }
    }
  }
</script>
## Carga de archivos

Carga archivos haciendo clic o arrastr??ndolos.

### Clic para cargar archivos

:::demo Personalice el tipo y texto del bot??n utilizando la propiedad `slot`. Defina las propiedades `limit` y `on-exceed` para limitar el n??mero m??ximo de archivos a subir y especifique un m??todo para cuando el l??mite ha sido excedido.
```html
<el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  multiple
  :limit="3"
  :on-exceed="handleExceed"
  :file-list="fileList">
  <el-button size="small" type="primary">Clic para subir archivo</el-button>
  <div slot="tip" class="el-upload__tip">Solo archivos jpg/png con un tama??o menor de 500kb</div>
</el-upload>
<script>
  export default {
    data() {
      return {
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`El l??mite es 3, haz seleccionado ${files.length} archivos esta vez, a??ade hasta ${files.length + fileList.length}`);
      }
    }
  }
</script>
```
:::

### Cargar avatar de usuario

Utilice el _hook_ `before-upload` para limitar el formato de archivo y su tama??o.

:::demo
```html
<el-upload
  class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>

<script>
  export default {
    data() {
      return {
        imageUrl: ''
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('La imagen debe estar en formato JPG!');
        }
        if (!isLt2M) {
          this.$message.error('La imagen excede los 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>
```
:::

### Pared de fotograf??as

Utilice la propiedad `list-type` para cambiar el estilo a un listado de archivos.

:::demo
```html
<el-upload
  action="https://jsonplaceholder.typicode.com/posts/"
  list-type="picture-card"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove">
  <i class="el-icon-plus"></i>
</el-upload>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
<script>
  export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }
  }
</script>
```
:::

### Lista de archivos con miniatura

:::demo
```html
<el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList2"
  list-type="picture">
  <el-button size="small" type="primary">Clic para subir archivo</el-button>
  <div slot="tip" class="el-upload__tip">Solo archivos jpg/png con un tama??o menor de 500kb</div>
</el-upload>
<script>
  export default {
    data() {
      return {
        fileList2: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    }
  }
</script>
```
:::

### Control de lista de archivos

Utilice el _hook_ `on-change` para controlar la funcionalidad de la lista de archivos subidos.

:::demo
```html
<el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-change="handleChange"
  :file-list="fileList3">
  <el-button size="small" type="primary">Clic para subir archivo</el-button>
  <div slot="tip" class="el-upload__tip">Solo archivos jpg/png con un tama??o menor de 500kb</div>
</el-upload>
<script>
  export default {
    data() {
      return {
        fileList3: [{
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }, {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }]
      };
    },
    methods: {
      handleChange(file, fileList) {
        this.fileList3 = fileList.slice(-3);
      }
    }
  }
</script>
```
:::

### Arrastrar para cargar archivo

Puede arrastrar el archivo dentro de un ??rea en especifico para cargar el archivo.

:::demo
```html
<el-upload
  class="upload-demo"
  drag
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList"
  multiple>
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">Suelta tu archivo aqu?? o <em>haz clic para cargar</em></div>
  <div slot="tip" class="el-upload__tip">Solo archivos jpg/png con un tama??o menor de 500kb</div>
</el-upload>
```
:::

### Carga normal

:::demo
```html
<el-upload
  class="upload-demo"
  ref="upload"
  action="https://jsonplaceholder.typicode.com/posts/"
  :auto-upload="false">
  <el-button slot="trigger" size="small" type="primary">Selecciona un archivo</el-button>
  <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">Cargar al servidor</el-button>
  <div slot="tip" class="el-upload__tip">Solo archivos jpg/png con un tama??o menor de 500kb</div>
</el-upload>
<script>
  export default {
    methods: {
      submitUpload() {
        this.$refs.upload.submit();
      }
    }
  }
</script>
```
:::

### Atributos
| Atributo         | Descripci??n                              | Tipo                               | Valores aceptados         | Por defecto |
| ---------------- | ---------------------------------------- | ---------------------------------- | ------------------------- | ----------- |
| action           | obligatorio, URL de la petici??n          | string                             | ???                         | ???           |
| headers          | cabeceras de la petici??n                 | object                             | ???                         | ???           |
| multiple         | especifica si se permite subir m??ltiples archivos | boolean                            | ???                         | ???           |
| data             | opciones adicionales de la petici??n      | object                             | ???                         | ???           |
| name             | nombre clave del archivo                 | string                             | ???                         | file        |
| with-credentials | especifica si enviar?? cookies            | boolean                            | ???                         | false       |
| show-file-list   | especifica si se debe mostrar la lista de archivos cargados | boolean                            | ???                         | true        |
| drag             | se especifica si se activar?? el modo arrastrar y soltar | boolean                            | ???                         | false       |
| accept           | acepta [tipos de archivos](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept), puede no funcionar cuando `thumbnail-mode` esta en `true` | string                             | ???                         | ???           |
| on-preview       | _hook_ lanzado al hacer clic en los archivos subidos | function(file)                     | ???                         | ???           |
| on-remove        | _hook_ lanzado cuando los archivos son eliminados | function(file, fileList)           | ???                         | ???           |
| on-success       | _hook_ lanzado cuando los archivos fueron cargados correctamente | function(response, file, fileList) | ???                         | ???           |
| on-error         | _hook_ lanzado cuando han ocurrido algunos errores | function(err, file, fileList)      | ???                         | ???           |
| on-progress      | _hook_ lanzado cuando se produce alg??n progreso | function(event, file, fileList)    | ???                         | ???           |
| on-change        | _hook_ lanzado cuando el archivo seleccionado se carga correctamente o falla | function(file, fileList)           | ???                         | ???           |
| before-upload    | _hook_ lanzado antes de que el archivo sea cargado. Si este devuelve `true` o `Promise` entonces ser?? rechazado, la carga puede ser cancelada | function(file)                     | ???                         | ???           |
| before-remove    | _hook_ lanzado antes de eliminar un archivo. Los parametros son el archivo y la lista de archivos. Si se devuelve `false` o se devuelve una `Promise` y que luego es rechazada, la eliminaci??n ser?? abortada. | function(file, fileList)           | ???                         | ???           |
| thumbnail-mode   | especifica si se mostrar?? la miniatura   | boolean                            | ???                         | false       |
| file-list        | archivos cargados por defecto, por ejemplo,  [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}] | array                              | ???                         | []          |
| list-type        | tipo de lista de archivos                | string                             | text/picture/picture-card | text        |
| auto-upload      | se especifica si se autocargan archivos  | boolean                            | ???                         | true        |
| http-request     | sobreescribe el comportamiento por defecto de xhr, permitiendo implementar tu propia petici??n de carga de archivos | function                           | ???                         | ???           |
| disabled         | especifica si se deshabilita la carga de archivos | boolean                            | ???                         | false       |
| limit            | n??mero m??ximo de cargas permitidas       | number                             | ???                         | ???           |
| on-exceed        | _hook_ lanzado cuando el l??mite ha sido excedido | function(files, fileList)          | ???                         | -           |

### Slot
| Nombre       | Descripcion                              |
| ------------ | ---------------------------------------- |
| trigger | contenido que desencadena el di??logo de archivo |
| tip | contenido de los tips |

### M??todos
| Nombre del m??todo | Descripci??n                              | Parametros                |
| ----------------- | ---------------------------------------- | ------------------------- |
| clearFiles        | limpia la lista de archivos cargados (este m??todo no esta soportado en el _hook_ `before-upload`) | ???                         |
| abort             | cancela la petici??n de carga             | ??? file: fileList's item ??? |
