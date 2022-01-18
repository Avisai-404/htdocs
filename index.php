<?php
	$servidor="localhost";
	$usuario="root";
	$clave="";
	$baseDeDatos="formulario";

	$enlace = mysqli_connect($servidor, $usuario, $clave, $baseDeDatos);

	if(!$enlace){
		echo"Error en la conexion con el servidor";
	}
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"> 
        <title>Registro y Pedido</title>
        <link rel="stylesheet" type="text/css" href="estilo.css">
    </head>
    <body>

	<div class= "caja1">
 
 </div>


	<div class="contenedor">
		<form action="#" class="formulario" id="formulario" name="formulario" method="POST">
			<div class="contenedor-inputs">

			<img src="/foto/logopan.png" width="80" />

			<p>.</p>
                <h2>Registro</h2>
	         <p>.</p>
			 
			    
				<input type="text" name="nombre" placeholder="Nombre">
				<input type="text" name="correo" placeholder="Correo">
				<input type="text" name="direccion" placeholder="Direccion">
				<input type="text" name="cp" placeholder="CP">
				
				<input type="text" name="celular" placeholder="Num. Celular">

				

				<div class="producto">
				    <input type="radio" name="producto" id="envio" value="envio">
					<label class="label-radio envio" for="envio">Envio a domicilio</label>

					<input type="radio" name="producto" id="recoger" value="recoger">
					<label class="label-radio recoger" for="recoger">Recoger en panaderia</label>

				</div>
				<p>.</p>
				<h1>Escoge la cantidad de productos</h1>
				<p>.</p>
				
				<div class="precio">
				        <input type="text" name="producto1" placeholder="Num.Conchas">
				        <input type="text" name="producto2" placeholder="Num.Orejas">
						<input type="text" name="producto3" placeholder="Num.Platanos">
						<input type="text" name="producto4" placeholder="Num.Donas Azucaradas">
						<input type="text" name="producto5" placeholder="Num.Donas Glaceadas">
						<input type="text" name="producto6" placeholder="Num.Cuernos">

				</div>

				<div class="terminos">
					<input type="checkbox" name="terminos" id="terminos">
					<label for="terminos">Acepto los Terminos y Condiciones</label>
				</div>
				
				<ul class="error" id="error"></ul>
			</div>

			<input type="submit" class="btn" name="registrarse" value="Realizar Pedido">
			
			<p>.</p>

			<h3> Ver reflejado folio de tu registro:
			<a href="index.php"><input type="button" value= "Folio"></a>
		   </h3>
		   <p>.</p>
		   <h3> Volver al Menu Principal:
			<a href="index.html"><input type="button" value= "Menu"></a>
           </h3>

		</form>
		
		
		<div class="tabla">
			<table>
				<tr>
					<th>Folio</th>
					<th>Nombre</th>
					<th>Correo</th>
					<th>Pedido</th>
					<th>Direccion</th>
					<th>C.P</th>
					<th>Celular</th>
					<th>Total</th>
					
				</tr>
				
					<?php
						$consulta = "SELECT * FROM datos";
						$ejecutarConsulta = mysqli_query($enlace, $consulta);
						$verFilas = mysqli_num_rows($ejecutarConsulta);
						$fila = mysqli_fetch_array($ejecutarConsulta);

						if(!$ejecutarConsulta){
							echo"Error en la consulta";
						}else{
							if($verFilas<1){
								echo"<tr><td>Sin registros</td></tr>";
							}else{
								for($i=0; $i<=$fila; $i++){
									echo'
										<tr>
											<td>'.$fila[3].'</td>
											<td>'.$fila[0].'</td>
											<td>'.$fila[1].'</td>
											<td>'.$fila[2].'</td>
											<td>'.$fila[4].'</td>
											<td>'.$fila[5].'</td>
											<td>'.$fila[6].'</td>
											<td>'.$fila[7].'</td>
										</tr>
									';
									$fila = mysqli_fetch_array($ejecutarConsulta);

								}

							}
						}


					?>

			</table>
		</div>
	</div>
	<script src= "formulario.js"></script>
</body>
</html>
<?php
	if(isset($_POST['registrarse'])){
		$nombre =$_POST["nombre"];
		$correo=$_POST["correo"];
		$producto=$_POST["producto"];
		$id= rand(1,99);
		$direccion =$_POST["direccion"];
		$cp =$_POST["cp"];
		$celular =$_POST["celular"];


		$total = ($_POST["producto1"]* 5) + ($_POST["producto2"]* 5) + ($_POST["producto3"]* 5) + ($_POST["producto4"]* 7) + ($_POST["producto5"]* 8)  + ($_POST["producto6"]* 5);

		$insertarDatos = "INSERT INTO datos VALUES('$nombre',
													'$correo',
													'$producto',
													'$id',
													'$direccion',
													'$cp',
													'$celular',
													'$total')";

		$ejecutarInsertar = mysqli_query($enlace, $insertarDatos);

		if(!$ejecutarInsertar){
			echo"Error En la linea de sql";
		}
	}
	
?>


