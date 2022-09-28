<template>
    <section id="works" class="wrapper">
        <div class="first-work">
            <img sclass="img1-mario" src="https://user-images.githubusercontent.com/76618285/154713889-364cf9f1-ceda-46f5-9556-e728d538ed0b.gif" alt="">
            <div>
                <h1>
                  Mario-Kai
                </h1>
                <p>
                    Developed in Flutter. <br>
                    Use alightment to move an object. When you want to move <br>
                    to the right or left, you can add or subtract 0.02 <br>
                    to the value of the X-axis. The logic is the same for jumps.
                </p>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
h1 {
    margin: 0;
}
.first-work{
    margin-top: 50px;
    display: flex;
    justify-content: space-evenly;
}

img {
    width: 40%;
    border-radius: 30px;
}
</style>