# Closure - Exercise 5
Implementare la funzione `memoize` che, data in input la funzione per il calcolo del fattoriale, restituisce una closure che accetta come argomento un numero su cui eseguire la funzione per il calcolo del fattoriale, verifica se il risultato è già presente all'interno della variabile `cache`, se è presente restituisce immediatamente il risultato memorizzato precedentemente, altrimenti esegue la funzione passata come argomento e memorizza il risultato all'interno della variabile `cache`, così da servire il risultato cachato precedentemente qualora venga richiesto il fattoriale per lo stesso numero.

Esempio:
```
factorial = memoize(factorial);
console.log(factorial(10)); // Calculating result for 3628800
console.log(factorial(6)); // Fetching from cache for 720
console.log(factorial(5)); // Fetching from cache for 120
```

SUGGERIMENTO DEVELHOPE:
La `cache` è un oggetto vuoto nella quale salveremo come chiavi, i valori per cui eseguire il fattoriale e come valori il risultato del fattoriale, ad esempio `let cache = { 5: 120 }`. Per controllare se abbiamo già eseguito il fattoriale per quel numero, controlliamo se il valore passato in ingresso esiste tra le chiavi del nostro oggetto `cache`