<template>
    <div class="login-page p-d-flex p-jc-center p-ai-center">
        <div class="col-lg-4 col-md-6 col-sm-8 mx-auto p-d-flex p-flex-column p-ai-center bg-green-400 border-round-xl captcha-container">
            <div class="captcha-div">
                <form @submit.prevent="onSubmit">
                    <div class="g-recaptcha" :data-sitekey="siteKey"></div>
                    <button type="submit" class="button-68">Verify</button>
                </form>
            </div>
        </div>
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
.login-page {
    align-items: center;
    display: flex;
    height: 100vh;
}

.captcha-container {
    padding: 20px;
    background-color: #27ae60; /* Color verde */
    border-radius: 15px;
    box-shadow: rgba(39, 174, 96, .15) 0 4px 9px;
}

.captcha-div {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.button-68 {
    appearance: none;
    backface-visibility: hidden;
    background-color: #fff;
    border-radius: 8px;
    border-style: none;
    box-shadow: rgba(39, 174, 96, .15) 0 4px 9px;
    box-sizing: border-box;
    color: #27ae60;
    cursor: pointer;
    display: inline-block;
    font-family: Inter,-apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: normal;
    line-height: 1.5;
    outline: none;
    overflow: hidden;
    padding: 13px 20px;
    position: relative;
    text-align: center;
    text-decoration: none;
    transform: translate3d(0, 0, 0);
    transition: all .3s;
    user-select: none;
    vertical-align: top;
    white-space: nowrap;
}

.button-68:hover {
    background-color: #1e8449;
    color: #fff;
}

.button-68:active {
    transform: translateY(2px);
    transition-duration: .35s;
}

.button-68:hover {
    box-shadow: rgba(39, 174, 96, .2) 0 6px 12px;
}
</style>