# JLPT Verb Data Import

Since automated downloading is restricted, please manually download the JLPT verb vocabulary files and place them here.

## Instructions

1.  Download **JSON** vocabulary files for N5, N4, N3, N2, N1.
    *   Recommended source: [JLPT_Vocabulary by Bluskyo](https://github.com/Bluskyo/JLPT_Vocabulary/tree/master/json)
    *   Or [elzup/jlpt-word-list](https://github.com/elzup/jlpt-word-list/tree/master/json)
2.  Rename them to:
    *   `n5.json`
    *   `n4.json`
    *   `n3.json`
    *   `n2.json`
    *   `n1.json`
3.  Place them in this folder: `src/data/raw/`

## Running the Import

Once the files are here, run the import script:

```bash
npx tsx scripts/import_verbs.ts
```
