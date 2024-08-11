import { TextProcessor } from './TextProcessor';

const processor = new TextProcessor('markdown');
processor.appendList(['foo', 'bar', 'baz']);
console.log(processor.toString());

processor.clear();
processor.setOutputFormat('html');
processor.appendList(['alpha', 'beta', 'charlie']);
console.log(processor.toString());
