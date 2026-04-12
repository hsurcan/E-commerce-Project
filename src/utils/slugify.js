export const slugify = (text) => {
  if (!text) return "";   // Eğer text undefined veya null ise boş string dön, hatayı engelle

  return text
    .toString()
    .trim()
    .toLowerCase()
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/\s+/g, '-')      
    .replace(/[^\w-]+/g, '')    
    .replace(/--+/g, '-')       
    .replace(/^-+/, '')        
    .replace(/-+$/, '');        
};

// URL uzantısı düzenlerken kullanıyoruz, ÖNEMLİ!!! Okunabilirlik için!