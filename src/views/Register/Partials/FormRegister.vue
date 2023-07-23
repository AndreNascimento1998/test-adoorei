<template>
     <v-card>
        <v-col>
            <h1>Dados Pessoais</h1>
            <span>informe seus dados pessoais para acesso à sua conta</span>
        </v-col>
        <v-form ref="form">
            <v-text-field 
                v-model="register.name"
                class="pa-3"
                label="Nome Completo"
                variant="outlined"
                density="compact"
                :rules="validName"
            />
            
            <v-text-field 
                v-model="register.phone"
                class="pa-3"
                label="Celular"
                variant="outlined"
                density="compact"
                v-mask="['(##) #####-####', '(##) ####-####']"
                :rules="validPhone"
            />

            <v-text-field 
                v-model="register.email"
                class="pa-3"
                label="E-mail"
                variant="outlined"
                density="compact"
                :rules="validEmail"
            />

            <v-text-field 
                v-model="register.password"
                class="pa-3"
                label="Senha"
                variant="outlined"
                density="compact"
                :rules="validPass"
                hint="No mínimo 8 caracteres"
                persistent-hint
            />

            <v-text-field 
                v-model="register.validPassword"
                class="pa-3"
                label="Confirme sua senha"
                variant="outlined"
                density="compact"
                :rules="validOutherPass"

            />

            <v-divider class="mt-2 mb-2 mx-4"/>

            <v-col>
                <h1>Dados do seu site</h1>
            </v-col>

            <v-text-field 
                v-model="register.siteName"
                class="pa-3"
                label="Nome do seu site"
                variant="outlined"
                density="compact"
                hint="Exatamente igual ao título do site"
                persistent-hint
            />

            <v-divider class="mx-4"/>

            <v-col cols="12">
                <v-checkbox 
                    v-model="checkbox" 
                    color="#F11A40"
                    :rules="validCheckbox"
                >
                    <template v-slot:label>
                        <div 
                            class="text-label mt-6" 
                            :class="globalStore.theme == 'dark' ? 'light' : 'dark'"
                        >
                            <span>{{ labelText }}</span>
                            <v-tooltip location="bottom">
                                <template v-slot:activator="{ props }">
                                    <a
                                        target="_blank"
                                        href="https://github.com/AndreNascimento1998"
                                        v-bind="props"
                                        class="text-label"
                                        :class="globalStore.theme == 'dark' ? 'light' : 'dark'"
                                        @click.stop
                                    > 
                                        <span class="link-label"> termos de uso </span>
                                        <span>e </span>
                                        <span class="link-label">políticas de privacidade.</span>
                                    </a>
                                </template>
                                    Termos de condição de uso
                            </v-tooltip>
                        </div>
                    </template>
                </v-checkbox>
            </v-col>
            

            <v-col>
                <v-btn 
                    @click="saveUser"
                    block 
                    variant="outlined"
                >
                    Cria Conta
                </v-btn>
            </v-col>
        </v-form>
    </v-card>
</template>

<script setup lang="ts">
import useValidation from "@/composables/useValidation";
import User from "@/entity/User";
import router from "@/router";
import { useGlobalStore } from "@/stores/GlobalStore";
import { useUserStore } from "@/stores/UserStore";
import Swal from "sweetalert2";
import { computed, onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";

const form = ref()
const userStore = useUserStore()
const route = useRoute()

const globalStore = useGlobalStore()
const checkbox = ref(false)
const labelText = 'Ao concluir com seu cadastro você con com nossos'


const { 
    required, 
    passMinRegister, 
    minLenght, 
    phoneMin, 
    arrobaRequired
} = useValidation()

const register = reactive({
    idProduct: '',
    name: '',
    phone: '',
    email: '',
    password: '',
    validPassword: '',
    siteName: ''
})

const validCheckbox = computed(() => [required])
const validName = computed(() => [required, minLenght])
const validEmail = computed(() => [required, arrobaRequired])
const validPass = computed(() => [ passMinRegister, required ])
const validOutherPass = computed(() => [ passMinRegister, required, samePass])
const validPhone = computed(() => [required, phoneMin])


onMounted(() => {
    register.idProduct = route.params.id
})

const samePass = (value: string) => value == register.password || 'As senhas estão diferentes!'

async function saveUser() {
    const { valid } = await form.value.validate()
    if(valid){
        const result = await userStore.saveUser(register)
        console.log(`Usuário cadastrado, id: ${result.id}`)
    
        //Como fakeApi não retorna usuário válido simularemos 
        //o login com o usuário que a mesma permite validar
        const userObj = new User('mor_2314', '83r5^_')
        const userValidate = await userStore.singIn(userObj)
        if(userValidate) {
            router.push('/home')
        }
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Ooops...',
            text: 'Por favor complete as informações!',
        })
    }
}

function termsRoute() {
    const url = 'https://github.com/AndreNascimento1998'
    window.open(url, '_blank')
}
</script>

<style scoped>
.dark {
    color: black;
}

.light {
    color: white;
}
.inverse {
    flex-direction: row-reverse !important;
    flex-direction: column-reverse !important;
}

.text-label {
    text-decoration: none;
    font-weight: normal;
}

.link-label {
    text-decoration: underline;
}
</style>