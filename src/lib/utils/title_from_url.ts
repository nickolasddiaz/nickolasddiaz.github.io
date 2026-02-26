export default function title_from_url(url: string) {
  return url.split('/').pop()?.split('.').shift(); 
} // /database/Rubric.pdf to Rubric