import { Module } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ProductController } from "./product.controller";
import { GumroadModule } from "@Services/gumroad/gumroad.module";
import { GumroadService } from "@Services/gumroad/gumroad.service";

@Module({
  imports: [GumroadModule],
  controllers: [ProductController],
  providers: [ProductService, GumroadService],
})
export class ProductModule {}
