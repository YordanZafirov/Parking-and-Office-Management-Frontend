import { useState } from 'react';
import ImageMarker, { Marker } from 'react-image-marker';
import { CustomSpotMarker } from './CreateSpotMarker.static';
import { Button, ButtonsContainer, Container, DivFlexStyled, FormStyled, Option } from './CreateSpotMarker.style';

const floorPlan = 'https://parking-and-office-management.s3.amazonaws.com/1708009292684-office-planning-software.png';

const initialFormData: CustomSpotMarker = {
    top: 0,
    left: 0,
    name: '',
    description: '',
    isPermanent: false,
    spotType: '',
};

export default function SpotMarker() {
    const [markers, setMarkers] = useState<Array<CustomSpotMarker>>([
        { top: 59.00598691778694, left: 54.8050139275766, name: 'desk1', description: 'behind the wall' },
        { top: 59.489642548260605, left: 67.47910863509749, name: 'desk 2', description: 'behind wall 2' },
    ]);

    const [isFormOpen, setFormOpen] = useState(false);
    const [formData, setFormData] = useState<CustomSpotMarker>(initialFormData);

    const handleChange = (field: keyof CustomSpotMarker, value: string | boolean) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const [selectedMarker, setSelectedMarker] = useState<Marker | null>(null);

    const handleClear = () => {
        setMarkers([]);
    };

    const downloadMarkers = () => {
        const markersJson = {
            markers,
        };
        console.log(JSON.stringify(markersJson));
    };

    const handleAddMarker = (marker: Marker) => {
        setSelectedMarker(marker);
        setFormOpen(true);
    };

    const handleFormSubmit = (formData: CustomSpotMarker) => {
        if (selectedMarker) {
            console.log(selectedMarker);

            const newMarker: CustomSpotMarker = {
                top: selectedMarker.top,
                left: selectedMarker.left,
                name: formData.name,
                description: formData.description,
                spotType: formData.spotType,
                isPermanent: formData.isPermanent,
            };
            console.log('new Marker', newMarker);
            setMarkers([...markers, newMarker]);
            setFormOpen(false);
            setSelectedMarker(null);
            console.log('Form data submitted:', formData);
            setFormData(initialFormData);
        }
    };

    return (
        <Container className="App">
            <DivFlexStyled className="frame">
                <ImageMarker
                    src={floorPlan}
                    markers={markers}
                    onAddMarker={(marker: Marker) => {
                        handleAddMarker(marker);
                    }}
                />
                {isFormOpen && (
                    <div className="modal-content">
                        <FormStyled onSubmit={(e) => e.preventDefault()}>
                            <Button className="close-btn" onClick={() => setFormOpen(false)}>
                                Close
                            </Button>
                            <h3>Add New Spot</h3>
                            <label>
                                Name:
                                <input
                                    type="text"
                                    value={formData.name || ''}
                                    onChange={(e) => handleChange('name', e.target.value)}
                                />
                            </label>
                            <br />
                            <label>
                                Description:
                                <input
                                    type="text"
                                    value={formData.description || ''}
                                    onChange={(e) => handleChange('description', e.target.value)}
                                />
                            </label>
                            <label>
                                Spot Type:
                                <select
                                    value={formData.spotType || ''}
                                    onChange={(e) => handleChange('spotType', e.target.value)}
                                >
                                    <Option value="">Select Spot Type</Option>
                                    <Option value="indoor">Indoor</Option>
                                    <Option value="outdoor">Outdoor</Option>
                                </select>
                            </label>
                            <br />
                            <Button className="create-btn" onClick={() => handleFormSubmit(formData)}>
                                Save
                            </Button>
                        </FormStyled>
                    </div>
                )}
            </DivFlexStyled>
            <ButtonsContainer>
                <Button className="remove-btn" onClick={handleClear}>
                    Clear All Markers
                </Button>
                <Button className="create-btn" onClick={downloadMarkers}>
                    Save Floor Plan
                </Button>
            </ButtonsContainer>
        </Container>
    );
}
