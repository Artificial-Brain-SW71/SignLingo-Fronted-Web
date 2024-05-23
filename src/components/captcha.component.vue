<template>
    <div>
        <form @submit.prevent="onSubmit">
            <div class="g-recaptcha" :data-sitekey="siteKey"></div>
            <button type="submit">Verify</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            siteKey: '6LdAjeUpAAAAAG-9xh6w3KsPUOK_6aAvLq8kXJb3' 
        };
    },
    methods: {
        async onSubmit() {
            const response = grecaptcha.getResponse();
            if (response.length === 0) {
                alert("Please complete the captcha.");
            } else {
                const success = await this.verifyCaptcha(response);
                if (success) {
                    this.$router.push('/login');
                } else {
                    alert("Captcha verification failed.");
                }
            }
        },
        async verifyCaptcha(token) {
            try {
                const response = await fetch('https://artificialbrain.azurewebsites.net/api/Captcha/verify-captcha', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ token })
                });
                const data = await response.json();
                return data.success;
            } catch (error) {
                console.error("Error verifying captcha:", error);
                return false;
            }
        }
    }
};
</script>

<style scoped>
/* Agrega tus estilos aquí */
</style>
