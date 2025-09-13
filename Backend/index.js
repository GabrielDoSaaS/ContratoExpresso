import { pipeline } from '@huggingface/transformers';

const pipe = await pipeline(
  'text-generation',
  'HuggingFaceTB/SmolLM3-3B-Base',
  {
    dtype: 'q8', 
  }
);

const out = await pipe('Olá, meu nome é gabriel, e o seu?:',   {
    max_new_tokens: 50,   
    temperature: 0.3,      
    do_sample: true        
  });
console.log(out);
