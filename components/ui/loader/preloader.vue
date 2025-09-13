<template>
  <div class="min-h-screen w-full flex items-center justify-center bg-background">
    <div class="flex flex-col items-center space-y-4">
      <!-- Spinner animado -->
      <div class="h-16 w-16 animate-spin border-4 border-primary border-t-transparent rounded-full">
        <span class="sr-only">Carregando...</span>
      </div>

      <!-- Texto de carregamento com animação de pontos -->
      <div class="text-center">
        <p class="text-lg text-foreground font-medium">
          Carregando
        </p>
        <p class="text-sm text-muted-foreground">
          Aguarde um momento
        </p>
      </div>
    </div>
  </div>
</template>
