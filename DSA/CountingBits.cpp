int CountBits(int number){
    return __builtin_popcount(number);
}

int CountBits(int num){
    int num_copy = num, count = 0;

    while(num_copy){
        count += (num_copy & 1);

        num_copy = num_copy >> 1;
    }
}


/*
   1. We can use a standard built-in function (__builtin_popcount).
   2. We implement it by simply checking the last bit in the binary representation with 1 and keep count of it.
   3. Finally we keep on right shifting the number till we count all the bits.
*/