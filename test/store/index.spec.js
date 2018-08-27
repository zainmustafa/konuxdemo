import { store, persistor } from "app-store";

describe("store", () => {
    it("should have a store", () => {
        expect(store.getState()).toEqual({
            _persist: { rehydrated: true, version: -1 },
            app: {
                alerts: []
            },
            github: {
                popularRepos: {
                    data: [],
                    message: "",
                    status: "idle"
                }
            },
            router: { location: null },
            user: {
                isAuthenticated: false,
                isLoading: false,
                status: "idle",
                userObject : {}
            },
            netflix : {
                playlist: [],
                isLoading : false
            },

        });
    });

    it("should have a persistor", () => {
        expect(persistor.getState()).toEqual({
            bootstrapped: true,
            registry: []
        });
    });
});
