<template>
    <div>
        <div class="row">
            <div class="col">
                <b-card class="shadow">
                    <div class="d-flex align-items-end mb-1">
                        <h3 class="flex-fill">FTPS</h3>
                        <i class="fas fa-folder-open fa-3x text-blue"/>
                    </div>
                    <p class="m-auto text-center">Faça o Deploy do Seu site através do FTPS.</p>
                </b-card>
            </div>
            <div class="col">
                <b-card class="shadow">
                    <div class="d-flex align-items-end mb-1">
                        <h3 class="flex-fill">Github</h3>
                        <i class="fab fa-github fa-3x text-blue"/>
                    </div>
                    <p class="m-auto text-center">Faça o Deploy do Seu site através do Github.</p>
                </b-card>
            </div>
            <div class="col">
                <b-card class="shadow">
                    <div class="d-flex align-items-end mb-1">
                        <h3 class="flex-fill">Arquivos</h3>
                        <i class="fas fa-file-archive fa-3x text-blue"/>
                    </div>
                    <p class="m-auto text-center">Faça o Deploy do Seu Subindo os arquivos aqui.</p>
                </b-card>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.card:hover {
    border: 3px #5e72e4 solid;
}
</style>