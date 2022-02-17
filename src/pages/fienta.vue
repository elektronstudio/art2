<template>
  <Fienta client:only />
</template>

<style>
/*
There is a bug in Iles that /components styles are not picked up 
so we need to keep styles here for now
*/
.Fienta {
  display: grid;
  justify-content: center;
  align-content: center;
  min-height: 80vh;
}
.Fienta > div {
  width: 50vw;
  display: grid;
  gap: var(--gap-4);
}
.Fienta .EButton {
  justify-self: flex-start;
}
@media only screen and (max-width: 600px) {
  .Fienta {
    align-content: flex-start;
  }
  .Fienta > div {
    width: 100%;
  }
}
</style>
