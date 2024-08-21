<template>
	<header class="main-header">
		<h1>Contacts</h1>
		<nav>
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/about">About</RouterLink>
			<RouterLink to="/contact">Contacts</RouterLink>
			<RouterLink to="/statistics">Statistics</RouterLink>
		</nav>
	</header>
</template>

<script>
export default {}
</script>

<style lang="scss">
.main-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5vh;

    padding: 10px;
    background-color: lightblue;

    nav {
        display: flex;
        gap: 1em;
    }
}
</style>
