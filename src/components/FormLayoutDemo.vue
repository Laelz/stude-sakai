<template>
	<div class="grid">
		<div class="col-12 md:col-6">
			<div class="card p-fluid">
				<div class="flex align-items-center justify-content-center">
					<h4>Login</h4>
				</div>
						<div class="field">
							<label class="p-sr-only" for="name1">CNPJ</label>
							<InputText id="name1" type="text" placeholder="CNPJ"/>
					</div>
					<div class="field">
						<label class="p-sr-only" for="email1">Senha</label>
						<InputText id="email1" type="text" placeholder="Senha"/>
					</div>
					<div style="margin-top: 3%; margin-bottom: 15%;" class="p-fluid">
						<a style="float: right;" href="/">Esqueci a senha</a>
					</div>
					<div class="p-fluid">
						<Button label="Submit" class="mr-2 mb-2 p-button-warning"></Button>	
					</div>
					<div class="flex align-items-center justify-content-center">
						<a style="float: right;" href="/">Criar uma conta</a>
					</div>
			</div>
		</div>
	</div>	
</template>

<script>
	export default {
		data() {
			return {
			}
		}
	}
</script>
