export interface IGumroadProduct {
  name: string;
  preview_url: string;
  description: string;
  customizable_price: boolean;
  require_shipping: boolean;
  custom_receipt: string;
  custom_permalink: string;
  subscription_duration: string;
  id: string;
  url: string;
  price: number;
  currency: string;
  short_url: string;
  thumbnail_url: string;
  tags: string[];
  formatted_price: string;
  published: boolean;
  shown_on_profile: boolean;
  file_info: any;
  max_purchase_count: string;
  deleted: boolean;
  custom_fields: any[];
  custom_summary: string;
  is_tiered_membership: boolean;
  recurrences: string;
  variants: any[];
  sales_count: number;
  sales_usd_cents: number;
}

export interface IGumroadResponse {
  success: boolean;
  products: IGumroadProduct[];
}
