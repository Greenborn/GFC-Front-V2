import { verifica_permisos } from '@/helpers/rbac'

export const BtnConfig = class {
  icon     = ''
  class    = ''
  label    = '' 
  disabled = false 
  visible  = true
  severity = ''

  permisos = []
  //fija la visibilidad del boton, el mismo debe ser visible si tiene permisos y cumple la condición especificada
  __visible = ()=>{ 
    let tiene_permiso = false

    if (this.permisos.length == 0){ //si no se especifican permisos, quiere decir que se muestra a todxs
      tiene_permiso = true
    } else {
      tiene_permiso = verifica_permisos(this.permisos)
    }

    return tiene_permiso && this._visible() 
  }

  _click    = ()=>{}
  _visible  = ()=>{ return this.visible }
  _label    = ()=>{ return this.label }
  _disabled = ()=>{ return this.disabled }

  props_config = ['icon', 'class', 'permisos', '_click', 'visible','_visible', 'label', '_label', 'disabled', 'severity', '_disabled']
  
  constructor (params){
    for (let c=0; c < this.props_config.length; c++){
      if (params.hasOwnProperty(this.props_config[c]) && params[this.props_config[c]] != undefined)
        this[this.props_config[c]] = params[this.props_config[c]]
    }
  }

}