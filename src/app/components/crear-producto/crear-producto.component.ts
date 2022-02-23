import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  productoForm: FormGroup;

  /* FormBuilder =  nos permite maneja  de una buena manera nuestros formularios  */
  constructor( private fb: FormBuilder,
               private router: Router,
               private toastr: ToastrService ) {  
    this.productoForm = this.fb.group({
      producto:['', Validators.required],
      categoria:['', Validators.required],
      ubicacion:['', Validators.required],
      precio:['', Validators.required],

    })
  }

  ngOnInit(): void {
  }

  agregarProducto() {
    /* Acceder a todos los valores */
    /* console.log( this.productoForm.value ); */
    /* Acceder a cada uno de ellos */
    /* console.log( this.productoForm.get( 'producto' )?.value ); */

    /* Le estamos asignando a cada una de las variables del modulo producto los valores que vienen en el formulario */
    const PRODUCTO: Producto = {
      nombre:  this.productoForm.get( 'producto' )?.value,
      categoria: this.productoForm.get( 'categoria' )?.value,
      ubicacion:  this.productoForm.get( 'ubicacion' )?.value,
      precio: this.productoForm.get( 'precio' )?.value 
    }
 
    console.log( PRODUCTO );
    this.toastr.success('El producto fue registrado con exito!', 'Producto Registrado!');
    this.router.navigate(['/']);
  }

}
