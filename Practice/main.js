// const CompletePattern = (N) => 
// {
//   for(let i=1; i<=N; i++){
//     let s="";
//     for(let j=3; j<=N-1; j--){
//       s=s+"#";
//     }
//     for(let k=1; k<=i; k++){
//       s=s+k;
//     }
//     console.log(s);
//   }  
// };

// CompletePattern(4);

let Arr = [13, 89, 45, 98, 67, 45, 54], N = 7;

const isAllPass = (N, Arr) => {
    let s = 0;
    for (let i = 0; i < N; i++) {
        if (Arr[i] >= 32) {
            s = 1;
        } else {
            s = 0;
        }
    }
    if (s == 1) {
        console.log("YES");
    } else {
        console.log("NO");
    }
};

isAllPass(N, Arr);

