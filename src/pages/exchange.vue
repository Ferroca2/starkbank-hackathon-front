<script setup lang="ts">
import { exchangeApi } from 'boot/axios';
import { onMounted, ref } from 'vue';

const starkdolBalance = ref('-');
const dollarBalance = ref('-');


onMounted(async () => {
    const { data } = await exchangeApi.get('/balance');
    console.log(data);
    starkdolBalance.value = data.starkDolBalance;
    dollarBalance.value =(data.starkbankBalance.amount/100).toString();
});


</script>

<template>
    <q-page class="page column full-height align-center q-pa-xl">
        <div class="text-center text-h3 text-weight-bold q-mt-xl">
            Saldos de <span class="text-yellow-7">starkdol e dolar</span>
        </div>
        <div class="row justify-evenly align-center q-mt-xl">
            <div class="text-center">
                <div class="text-h6 text-weight-bold text-yellow-7">
                    Dolar
                </div>
                <div class="text-h4 text-weight-bold">
                    U$ {{ dollarBalance }}
                </div>
            </div>
            <div class="text-center">
                <div class="text-h6 text-weight-bold text-yellow-7">
                    STARKDol
                </div>
                <div class="text-h4 text-weight-bold">
                    U$ {{ starkdolBalance }}
                </div>
            </div>
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
