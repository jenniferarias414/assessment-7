How does each function “scale”? Which of the two functions scales better? How can you tell? (table attached to files)

------------------------------------------------------------------------------------

According to the execution times listed in the table when these functions are run on different sized arrays, the execution time of doublerAppend seems to increase regularly whereas doublerInsert's time increases significantly more and more after a medium sized array is passed in.

The regular/stable increase in size using doublerAppend would demonstrate a more linear complexity, and the significant increase in time with relation to the size of the array using doublerInsert could be considered exponential.

This means that doublerAppend using the .push() method scales better as larger arrays are passed in when compared to doublerInsert.

