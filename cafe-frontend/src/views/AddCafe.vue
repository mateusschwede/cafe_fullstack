<template>
    <div class="container mt-4">
        <h2>Adicionar Café</h2>
        <b-form @submit.prevent="addCafe">
            <b-form-input v-model="form.nome" placeholder="Nome" class="mb-2" maxlength="255" required />
            <b-form-input v-model="form.data_inauguracao" type="date" class="mb-2" :max="new Date().toLocaleDateString('sv-SE')" required />
            <b-form-textarea v-model="form.endereco" placeholder="Endereço" class="mb-2" maxlength="255" required />
            <b-form-input v-model.number="form.avaliacao" type="number" step="0.01" min="0" max="10" class="mb-2"
                required />
            <b-button type="submit" variant="success" class="me-2">Confirmar</b-button>
            <router-link to="/" class="btn btn-secondary">Cancelar</router-link>
        </b-form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '../services/api'

const router = useRouter()
const form = ref({ nome: '', data_inauguracao: '', endereco: '', avaliacao: 0 })

const addCafe = async () => {
    await api.post('cafeterias/', form.value)
    router.push('/')
}
</script>