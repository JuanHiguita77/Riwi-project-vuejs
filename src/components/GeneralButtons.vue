<template>
    <button class="floating-btn">
        <i class="bi bi-gear"></i> <!-- Icono de configuración de Bootstrap -->
      </button>
      
      <div>
          <!-- Botón flotante para volver al principio -->
          <button @click="scrollToTop" class="scroll-to-top">
            <i class="bi bi-arrow-up"></i>
          </button>
      </div>
</template>

<script lang="ts" setup>
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        });
    }
</script>

<style lang="scss" scoped>
.scroll-to-top {
    position: fixed;
    bottom: 20px; /* Separación desde el borde inferior */
    right: 20px; /* Separación desde el borde derecho */
    background-color: $primary-color; /* Color de fondo */
    color: white; /* Color del texto */
    border: none; /* Sin borde */
    border-radius: 50%; /* Botón circular */
    width: 50px; /* Ancho del botón */
    height: 50px; /* Altura del botón */
    font-size: 24px; /* Tamaño del icono/texto */
    cursor: pointer; /* Cambia el cursor al pasar por encima */
    box-shadow: $box-shadow-full; /* Sombra */
    z-index: 1000; /* Asegura que esté sobre otros elementos */
  }
  
  .scroll-to-top:hover {
    background-color: $secondary-color;
  }

  .floating-btn {
    position: fixed;
    top: 33%;
    right: 0; 
    background-color: $primary-color; /* Color de fondo del botón */
    color: white; /* Color del icono */
    border: none;
    border-radius: 8px 0 0 8px;
    width: 50px; /* Ancho del botón */
    height: 50px; /* Alto del botón */
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: $box-shadow-full; /* Sombra para mayor visibilidad */
    z-index: 1000; /* Asegúrate de que esté encima de otros elementos */
  }
  .floating-btn:hover {
    background-color: $secondary-color; /* Color de fondo al pasar el ratón */
  }
</style>