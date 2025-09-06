import { BaseUrl } from "@/types/types";
import React from "react";

export default async function GetAllCategories() {
  try {
    const data = await fetch(`${BaseUrl}/api/v1/categories`, {
      next: { revalidate: 60 },
    });
    const categories = await data.json();
    console.log("🚀 ~ GetAllCategories ~ categories:", categories)


  } catch (error) {
    console.log("🚀 ~ getAllCategories ~ error:", error);
    return null;
  }

}
