import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserPreferencesState {
  city: string;
  budgetRange: [number, number];
  propertyType: 'apartment' | 'villa' | 'plot' | 'commercial';
}

const initialState: UserPreferencesState = {
  city: 'Bengaluru',
  budgetRange: [50, 150],
  propertyType: 'apartment'
};

const userPreferencesSlice = createSlice({
  name: 'userPreferences',
  initialState,
  reducers: {
    updateCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
    },
    updateBudget(state, action: PayloadAction<[number, number]>) {
      state.budgetRange = action.payload;
    },
    updatePropertyType(state, action: PayloadAction<UserPreferencesState['propertyType']>) {
      state.propertyType = action.payload;
    }
  }
});

export const { updateCity, updateBudget, updatePropertyType } = userPreferencesSlice.actions;
export default userPreferencesSlice.reducer;
