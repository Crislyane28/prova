<script>
  import { currentUser, Contato, addContato, removeContato } from "../stores";

  const form = {
    name: "",
  };

  function handleForm() {
    addContato(form.name, $currentUser.id)

    form.name = '';
  }

  function remove(id) {
    removeContato(id, $currentUser.id)
  }
</script>

{#if $currentUser}
  <div>
    <h2></h2>
    {#each $Contato as cont}
        <div>{cont.name} <a href="#" on:click|preventDefault={() => remove(cont.id)}>remover</a></div>
    {/each}
    <form on:submit|preventDefault={handleForm}>
      <fieldset>
        <legend>Adicionar Contato</legend>
        <input
          type="text"
          name="name"
          bind:value={form.name}
          placeholder="nome do contato"
          required
        />
        <button>Adicionar</button>
      </fieldset>
    </form>
  </div>
{/if}
