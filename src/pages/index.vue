<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import {
    matAccountBalance,
    matAttachMoney,
    matAccountBalanceWallet,
} from '@quasar/extras/material-icons';
import { transactionApi } from 'boot/axios';
import { useQuasar } from 'quasar';

const $q = useQuasar();

$q.dark.set(true);

const loading = ref(false);

const data = reactive({
    agency: '',
    account: '',
    amount: '',
});

const amount = computed(() => {
    return parseInt(data.amount)  * 100;
});

async function transfer() {
    loading.value = true;
    try{
        await transactionApi.post('/payment', {
            value: amount.value,
            finalBankCode: '20018183',
            finalBranchCode: '0001',
            finalAccountNumber: data.account,
        });
        loading.value = false;
        $q.notify({
            color: 'green-7',
            textColor: 'white',
            icon: 'check',
            message: 'Transferência realizada com sucesso!',
        });
    } catch (error) {
        $q.notify({
            color: 'red-7',
            textColor: 'white',
            icon: 'warning',
            message: 'Erro ao realizar transferência!',
        });
    } finally {
        loading.value = false;
        data.account = '';
        data.amount = '';
        data.agency = '';
    }
}

</script>

<template>
    <q-page class="page column full-height align-center q-pa-xl">
        <div class="text-center text-h3 text-weight-bold q-mt-xl">
            Transferência <span class="text-accent">internacional</span>
        </div>
        <div class="row justify-center align-center">
            <q-form
                class="form"
                @submit.prevent="transfer"
            >
                <div class="form__contents column">
                    <q-select
                        v-model="data.agency"
                        :options="['Stark Bank - 0001']"
                        outlined
                        label="Agencia e Banco"
                        type="text"
                        color="accent"
                    >
                        <template #prepend>
                            <q-icon :name="matAccountBalance" />
                        </template>
                    </q-select>
                    <q-input
                        v-model="data.account"
                        outlined
                        label="Conta"
                        type="number"
                        color="accent"
                    >
                        <template #prepend>
                            <q-icon :name="matAccountBalanceWallet" />
                        </template>
                    </q-input>
                    <q-input
                        v-model="data.amount"
                        outlined
                        label="Quantia em dólar"
                        type="number"
                        color="accent"
                    >
                        <template #prepend>
                            <q-icon :name="matAttachMoney" />
                        </template>
                    </q-input>
                    <q-btn
                        class="form__submit"
                        color="accent"
                        :loading="loading"
                        rounded
                        :disable="loading"
                        no-caps
                        type="submit"
                    >
                        <template #loading>
                            <q-spinner
                                size="24px"
                                color="white"
                            />
                        </template>
                        Transferir
                    </q-btn>
                </div>
            </q-form>
        </div>
    </q-page>
</template>

<style scoped lang="scss">
.form {
    max-width: 600px;
    width: 100%;

    &__contents {
        gap: 2rem;
        margin-top: 3rem;
    }

    &__submit {
        width: 100%;
        height: 50px;

        font-size: 13pt;
    }
    &__login {
        width: 100%;
        text-align: center;
        font-size: 13px;
        margin-top: .7rem;

        & > a {
            color: $accent;
        }
    }
}
</style>
