export async function getInvoices(userId) {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const res = await fetch(`${baseUrl}/api/invoice?userId=${userId}`, {
        cache: "no-store"
      });
      if (!res.ok) {
        throw new Error(`Failed to fetch invoices: ${res.statusText}`);
      }
      const invoices = await res.json();
      return invoices;
    } catch (error) {
      console.error('Error fetching invoices:', error);
      return [];
    }
  }
  