/*

A gene string can be represented by an 8-character long string, with choices from 'A', 'C', 'G', and 'T'.

Suppose we need to investigate a mutation from a gene string startGene to a gene string endGene where one mutation is defined as one single character changed in the gene string.

For example, "AACCGGTT" --> "AACCGGTA" is one mutation.
There is also a gene bank bank that records all the valid gene mutations. A gene must be in bank to make it a valid gene string.

Given the two gene strings startGene and endGene and the gene bank bank, return the minimum number of mutations needed to mutate from startGene to endGene. If there is no such a mutation, return -1.

Note that the starting point is assumed to be valid, so it might not be included in the bank.

Input: startGene = "AACCGGTT", endGene = "AAACGGTA", bank = ["AACCGGTA","AACCGCTA","AAACGGTA"]
Output: 2

*/

export const minMutation = (
  startGene: string,
  endGene: string,
  bank: string[]
) => {
  let validGenes = new Set(bank);
  let queue = [startGene];
  let count = 0;

  let findValidGenes = (gene: string) => {
    let result: string[] = [];

    for (let validGene of validGenes) {
      let diff = 0;

      for (let i = 0; i < gene.length; i++) {
        if (diff > 1) break;
        if (validGene[i] === gene[i]) continue;
        diff++;
      }

      if (diff === 1) {
        result.push(validGene);
        validGenes.delete(validGene);
      }
    }

    return result;
  };

  while (queue.length) {
    let next = [];

    for (let gene of queue) {
      if (gene === endGene) return count;

      next.push(...findValidGenes(gene));
    }

    queue = next;
    count++;
  }

  return -1;
};

console.log(
  minMutation("AACCGGTT", "AAACGGTA", ["AACCGGTA", "AACCGCTA", "AAACGGTA"])
);
