import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllVehicles } from "../features/vehicalSlice";

const VEHICLES_PER_PAGE = 6;

const useGalleryForm = () => {
  const dispatch = useDispatch();
  const { vehicles, loading, error } = useSelector((state) => state.vehicleInfo);

  const [currentPage, setCurrentPage] = useState(0);
  const [filters, setFilters] = useState({
    brand: "",
    type: "",
    price: "",
  });

  useEffect(() => {
    dispatch(fetchAllVehicles());
  }, [dispatch]);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    setCurrentPage(0); // Reset to first page when filters are applied
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  // Apply filters
  const filteredVehicles = vehicles.filter((vehicle) => {
    const matchBrand = filters.brand ? vehicle.brand === filters.brand : true;
    const matchType = filters.type ? vehicle.type === filters.type : true;
    const matchPrice =
      filters.price === "under-20k"
        ? vehicle.price < 20000
        : filters.price === "20k-50k"
        ? vehicle.price >= 20000 && vehicle.price <= 50000
        : filters.price === "above-50k"
        ? vehicle.price > 50000
        : true;
    return matchBrand && matchType && matchPrice;
  });

  const totalPages = Math.ceil(filteredVehicles.length / VEHICLES_PER_PAGE);

  const currentVehicles = filteredVehicles.slice(
    currentPage * VEHICLES_PER_PAGE,
    (currentPage + 1) * VEHICLES_PER_PAGE
  );

  return {
    loading,
    error,
    currentVehicles,
    handleFilterChange,
    handleSearch,
    handlePrev,
    handleNext,
    totalPages,
    filters,
  };
};

export default useGalleryForm;
