### folders
```
[
    {
        id: "1",
        name: "Top 10",
        pins: ["pin1", "pin2"] 
    },
    {
        id: "2",
        name: "Inglês",
        pins: ["pin1", "pin2"] 
    },
    {
        id: "3",
        name: "Programação",
        pins: ["pin1", "pin2", "pin3"] 
    }
]
```
### Global state
```
{
    folders: [{}, {}],
    activePin: "",
    modal: "SavePin" | "CreateFolder"
    type:
}
```

openModalPin() -> { folders: [], activePin: "123", modal: "savePin"}

closeModal() -> { folders: [], modal: null, activePin: null}

savePinInFolder("folder", "pin1") -> {folders: [{ id: "pin }] }