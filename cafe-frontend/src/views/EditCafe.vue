<template>
    <div class="container mt-4">
        <h2>Editar Café {{ form.nome }}:</h2>
        <b-form @submit.prevent="updateCafe">
            <b-form-input v-model="form.nome" class="mb-2" maxlength="255" required />
            <b-form-input v-model="form.data_inauguracao" type="date" class="mb-2" :max="new Date().toLocaleDateString('sv-SE')" required />
            <b-form-textarea v-model="form.endereco" class="mb-2" maxlength="255" required />
            <b-form-input v-model.number="form.avaliacao" type="number" step="0.01" min="0" max="10" class="mb-2"
                required />
            <b-button type="submit" variant="success" class="btn btn-success me-2">Confirmar</b-button>
            <router-link to="/" class="btn btn-secondary">Cancelar</router-link>
        </b-form>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import api from '../services/api'

const route = useRoute()
const router = useRouter()
const form = ref<any>({})

onMounted(async () => {
    const { data } = await api.get(`cafeterias/${route.params.id}/`)
    form.value = data
})

const updateCafe = async () => {
    await api.put(`cafeterias/${route.params.id}/`, form.value)
    router.push('/')
}
</script>