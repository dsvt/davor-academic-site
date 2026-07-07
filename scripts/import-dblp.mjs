import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const outputPath = join(process.cwd(), 'src/data/generated/dblp.bib');
const dblpBibUrl = 'https://dblp.org/pid/68/6669.bib';

async function main() {
  const response = await fetch(dblpBibUrl, {
    headers: {
      'User-Agent': 'davor-academic-site/0.1 contact:https://www.davors.com'
    }
  });

  if (!response.ok) {
    throw new Error(`DBLP request failed: ${response.status} ${response.statusText}`);
  }

  const bibtex = await response.text();
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, bibtex, 'utf8');
  console.log(`Wrote ${outputPath}`);
  console.log('Review and curate before publishing. Do not blindly overwrite selected publications.');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
