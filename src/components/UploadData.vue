<template>
	<div class="container">
		<div>
			<h2>Upload Itinerary & Flights</h2>
			<label>Files
				<input type="file" accept=".csv" multiple @change="handleFileUpload( $event )"/>
			</label>
			<br>
      <br>
			<button v-on:click="submitFiles()">Submit</button>
		</div>
	</div>
</template>


<script>
	import axios from 'axios';

	export default {
    name:'UploadData',
		data(){
			return {
				files: []
			}
		},
		
		methods: {
			handleFileUpload( event ){
				this.files = event.target.files;
			},
			
			submitFiles(){
				let formData = new FormData();
				
				for( var i = 0; i < this.files.length; i++ ){
					let file = this.files[i];
				
          formData.append('files', file);
				}
				
        let self = this;
				axios.post(`${process.env.VUE_APP_API_HOST}/upload`,
					formData,
					{
						headers: {
								'Content-Type': 'multipart/form-data'
						}
					}
				).then(function(){
          self.$router.push({ path: '/' })
				})
				.catch(function(e){
          console.log(e);
				});
			}
		}
	}
</script>
