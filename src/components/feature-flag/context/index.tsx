import { createContext, ReactNode, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data";

interface FeatureFlagsContextType {
	loading: boolean;
	enabledFlags: Record<string, boolean>;
}

export const FeatureFlagsContext =
	createContext<FeatureFlagsContextType | null>(null);

interface FeatureFlagGlobalStateProps {
	children: ReactNode;
}

export default function FeatureFlagGlobalState({
	children,
}: FeatureFlagGlobalStateProps) {
	const [loading, setLoading] = useState<boolean>(false);
	const [enabledFlags, setEnabledFlags] = useState<Record<string, boolean>>({});

	async function fetchFeatureFlags(): Promise<void> {
		try {
			setLoading(true);
			//original service call
			const response = await featureFlagsDataServiceCall();
			setEnabledFlags(response);
		} catch (error) {
			if (error instanceof Error) {
				console.log(error.message);
			}
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchFeatureFlags();
	}, []);

	return (
		<FeatureFlagsContext.Provider value={{ loading, enabledFlags }}>
			{children}
		</FeatureFlagsContext.Provider>
	);
}
