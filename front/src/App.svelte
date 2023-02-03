<script>
  import Home from "./lib/Home.svelte";
  import Register from "./lib/Register.svelte";
  import Login from "./lib/Login.svelte";
  import Products from "./lib/Products.svelte";
  import { currentPage, currentUser } from "./stores";

  function changePage(page) {
    $currentPage = page
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<main>
  <h1>My app</h1>
  <nav>
    <div on:click={() => changePage("home")}>Home</div>

    {#if !$currentUser}
      <div on:click={() => changePage("register")}>Cadastrar</div>
      <div on:click={() => changePage("login")}>Login</div>
    {:else}
      <div on:click={() => changePage("products")}>Produtos</div>
      <div on:click={() => ($currentUser = null)}>Logout</div>
    {/if}
  </nav>
  <div>
    {#if $currentPage == "home"}
      <Home />
    {:else if $currentPage == "register"}
      <Register />
    {:else if $currentPage == "products"}
      <Products />
    {:else if $currentPage == "login"}
      <Login />
    {/if}
  </div>
</main>

<style>
  nav {
    display: flex;
    gap: 0.5em;
    justify-content: space-between;
  }
  nav > div {
    border: 1px solid black;
    padding: 0 1em;
    cursor: pointer;
  }
</style>
